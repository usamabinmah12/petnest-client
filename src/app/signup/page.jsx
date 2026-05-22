"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Button, Card, Form } from "@heroui/react";
import Link from "next/link";
import toast from "react-hot-toast";
import { Eye, EyeOff, User, Mail, Lock, Camera, Sparkles, ArrowRight } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { FaGoogle } from "react-icons/fa";


const SignUp = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
         const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
         if (user.password !== user.confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        if (user.password.length < 6) {
            toast.error("Password must be at least 6 characters!");
            return;
        }
        
        setIsLoading(true);
        
        try {
            const { data, error } = await authClient.signUp.email({
                name: user.name,
                email: user.email,
                password: user.password,
                image: user.photo || undefined, 
                 callbackURL: "/" 
            });
            
            if (error) {
                console.error("Signup error:", error);
                toast.error(error.message || "Failed to create account");
                setIsLoading(false);
                return;
            }
            
            console.log("Signup success:", data);
            toast.success("Account created successfully!");
           
            router.push("/login");
            
        } catch (err) {
            console.error("Unexpected error:", err);
            toast.error("An unexpected error occurred");
            setIsLoading(false);
        }
    }
   const handleGoogle = async () => {
    const data = await authClient.signIn.social({
          provider: "google",
    });
};
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6 relative overflow-hidden">
            
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
            </div>

            <Card className="w-full max-w-md p-8 flex flex-col gap-6 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl relative z-10">
                
                <div className="text-center">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                        <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                        Create Account
                    </h1>
                    <p className="text-white/60 mt-2 text-sm">
                  
                    </p>
                </div>

                <Form onSubmit={onSubmit} className="flex flex-col gap-5">
                    <Input
                        name="name"
                        label="Full Name"
                        placeholder="John Doe"
                        startContent={<User className="w-4 h-4 text-white/40" />}
                        classNames={{
                            label: "text-white/70",
                            input: "text-white",
                            inputWrapper: "bg-white/5 border border-white/20 hover:border-white/40 focus:border-purple-500"
                        }}
                        isRequired
                    />

                    <Input
                        name="email"
                        label="Email Address"
                        type="email"
                        placeholder="you@example.com"
                        startContent={<Mail className="w-4 h-4 text-white/40" />}
                        classNames={{
                            label: "text-white/70",
                            input: "text-white",
                            inputWrapper: "bg-white/5 border border-white/20 hover:border-white/40 focus:border-purple-500"
                        }}
                        isRequired
                    />

                    <Input
                        name="photo"
                        label="Photo URL (Optional)"
                        placeholder="https://your-image-url.jpg"
                        startContent={<Camera className="w-4 h-4 text-white/40" />}
                        classNames={{
                            label: "text-white/70",
                            input: "text-white",
                            inputWrapper: "bg-white/5 border border-white/20 hover:border-white/40 focus:border-purple-500"
                        }}
                    />
                     <Input
                        name="password"
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        startContent={<Lock className="w-4 h-4 text-white/40" />}
                        endContent={
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="focus:outline-none"
                            >
                                {showPassword ? (
                                    <EyeOff className="w-4 h-4 text-white/40 hover:text-white/60" />
                                ) : (
                                    <Eye className="w-4 h-4 text-white/40 hover:text-white/60" />
                                )}
                            </button>
                        }
                        classNames={{
                            label: "text-white/70",
                            input: "text-white",
                            inputWrapper: "bg-white/5 border border-white/20 hover:border-white/40 focus:border-purple-500"
                        }}
                        isRequired
                    />
                    <Input
                        name="confirmPassword"
                        label="Confirm Password"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        startContent={<Lock className="w-4 h-4 text-white/40" />}
                        endContent={
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="focus:outline-none"
                            >
                                {showConfirmPassword ? (
                                    <EyeOff className="w-4 h-4 text-white/40 hover:text-white/60" />
                                ) : (
                                    <Eye className="w-4 h-4 text-white/40 hover:text-white/60" />
                                )}
                            </button>
                        }
                        classNames={{
                            label: "text-white/70",
                            input: "text-white",
                            inputWrapper: "bg-white/5 border border-white/20 hover:border-white/40 focus:border-purple-500"
                        }}
                        isRequired
                    />

                    <Button 
                        type="submit" 
                        isLoading={isLoading}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-2 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg disabled:opacity-50"
                        endContent={!isLoading && <ArrowRight className="w-4 h-4" />}
                    >
                        {isLoading ? "Creating Account..." : "Sign Up"}
                    </Button>
                </Form>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/10"></div>
                    </div>
                    <div className="relative flex justify-center text-xs">
                        <span className="px-2 bg-transparent text-white/40">or</span>
                    </div>
                </div>

                <p className="text-center text-sm text-white/60">
                    Already have an account?{" "}
                    <Link href="/login" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors">
                        Log in
                    </Link>
                </p>
                 <div className="relative flex justify-center text-xs">
                                        <span className="px-2 bg-transparent text-white/40">or</span>
                               </div>
                               <div className="flex items-center justify-center">
                                <Button variant="danger-soft" onClick={handleGoogle} > <FaGoogle></FaGoogle> SignUp With Google</Button>
                                 
                  </div>
            </Card>
        </div>
    );
};

export default SignUp;