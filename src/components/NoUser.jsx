import React from 'react';
import { Button } from "@heroui/react";
import Link from 'next/link';
import { ImBlocked } from 'react-icons/im';

const NoUser = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 p-6">
            You have log in for adopt
        </div>
    );
};

export default NoUser;