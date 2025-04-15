"use client";

import { useEffect, useCallback, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "~/components/ui/card";

import { Label } from "~/components/ui/label";
import { useFrameSDK } from "~/hooks/useFrameSDK";

function BlockstoriesCard() {
  const handleClick = () => {
    window.location.href = "https://www.blockstories.de";
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to Blockstories</CardTitle>
        <CardDescription>
          Click below to visit our website
        </CardDescription>
      </CardHeader>
      <CardContent>
        <button 
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Visit Blockstories
        </button>
      </CardContent>
    </Card>
  );
}

export default function Frame() {
  const { isSDKLoaded } = useFrameSDK();

  if (!isSDKLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-[300px] mx-auto py-2 px-2">
      <BlockstoriesCard />
    </div>
  );
}
