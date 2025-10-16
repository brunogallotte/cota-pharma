"use client";

import { CardDescription } from "@/components/ui/card";
import { Verified } from "lucide-react";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

export const Success = () => {
  const [seconds, setSeconds] = useState(5);

  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    if (seconds === 0) return router.push("/");

    return () => clearInterval(interval);
  }, [seconds]);
  return (
    <Fragment>
      <CardDescription className="text-center">
        Você será redirecionado em {seconds} segundos
      </CardDescription>
      <Verified className="size-10 text-green-500 animate-pulse" />
    </Fragment>
  );
};
