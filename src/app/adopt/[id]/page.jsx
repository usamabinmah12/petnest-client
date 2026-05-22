"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@heroui/react";
import NoUser from "@/components/NoUser";
import { useSession } from "@/lib/auth-client";
import { getTokenAction } from "@/app/actions";

export default function AdoptPage() {
  const params = useParams();
  const router = useRouter();
  const { data: session } = useSession();

  const user = session?.user;

  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    pickupDate: "",
    message: "",
  });

  useEffect(() => {
    if (params?.id) {
      fetchPetDetails();
    }
  }, [params?.id]);

  const fetchPetDetails = async () => {
    try {
      const token = await getTokenAction();
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/pets/${params.id}`,
        {
          headers: token ? {
            authorization: `Bearer ${token}`
          } : {}
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setPet(data);
    } catch (error) {
      console.error("Error fetching pet:", error);
      setSubmitError("Cannot connect to server. Please make sure backend is running.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    if (!formData.pickupDate) {
      setSubmitError("Please select a pickup date");
      setSubmitting(false);
      return;
    }

    if (!user?.email || !pet?._id) {
      setSubmitError("User or pet data not loaded");
      setSubmitting(false);
      return;
    }

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

     
      const updateResponse = await fetch(
        `${apiUrl}/update/${pet._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            adoptedBy: user.email,
            pickupDate: formData.pickupDate,
            message: formData.message,
          }),
        }
      );

      const updateResult = await updateResponse.json();

      if (!updateResponse.ok || !updateResult.success) {
        throw new Error(
          updateResult.error || "Failed to update pet status"
        );
      }

      const adoptionRequest = {
        petId: pet._id,
        petName: pet.petName,
        userName: user.name,
        userEmail: user.email,
        pickupDate: formData.pickupDate,
        message: formData.message,
        status: "approved",
        requestedAt: new Date().toISOString(),
        petOwnerEmail: pet.ownerEmail,
      };

      await fetch(`${apiUrl}/api/adoption-requests`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adoptionRequest),
      });

      setSuccess(true);

      setTimeout(() => {
        router.push("/pets");
      }, 2000);

    } catch (err) {
      console.error("Adoption error:", err);
      setSubmitError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading pet details...</p>
        </div>
      </div>
    );
  }

  if (!pet) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-red-600 mb-4">Pet not found</p>
          <Button onClick={() => router.push("/pets")} className="mt-4">
            Back to Pets
          </Button>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-green-50 text-green-600 p-8 rounded-lg text-center max-w-md">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold mb-2">Successfully Adopted!</h2>
          <p className="mb-4">
            Congratulations! You have successfully adopted {pet.petName}.
          </p>
          <p className="text-sm">Redirecting to pets page...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <NoUser />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg grid md:grid-cols-2 overflow-hidden">

        <div className="p-6 bg-gray-50">
          <Image
            src={pet.image || "https://via.placeholder.com/500x400?text=No+Image"}
            alt={pet.petName || "Pet"}
            width={500}
            height={400}
            className="rounded-xl object-cover w-full h-64"
          />

          <h1 className="text-3xl font-bold mt-4">
            {pet.petName || "Unknown Pet"}
          </h1>
          <p className="text-gray-600 mt-2">
            Breed: {pet.breed || "Not specified"}
          </p>
          <p className="text-gray-600">
            Age: {pet.age || "Unknown"} years
          </p>
          <p className="text-gray-600">
            Owner: {pet.ownerEmail || "Not specified"}
          </p>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Adoption Form</h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              value={pet.petName || ""}
              readOnly
              className="w-full p-3 border rounded-lg bg-gray-100"
            />

            <input
              value={pet.ownerEmail || ""}
              readOnly
              className="w-full p-3 border rounded-lg bg-gray-100"
            />

            <input
              value={user.name || ""}
              readOnly
              className="w-full p-3 border rounded-lg bg-gray-100"
            />

            <input
              value={user.email || ""}
              readOnly
              className="w-full p-3 border rounded-lg bg-gray-100"
            />

            <input
              type="date"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              min={new Date().toISOString().split("T")[0]}
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              placeholder="Why do you want to adopt?"
              rows="3"
            />

            {submitError && (
              <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm">
                {submitError}
              </div>
            )}

            <Button
              type="submit"
              disabled={submitting}
              className="w-full mt-6 bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold p-3 rounded-lg disabled:opacity-50"
            >
              {submitting ? "Submitting..." : "Confirm Adoption"}
            </Button>

          </form>
        </div>
      </div>
    </div>
  );
}