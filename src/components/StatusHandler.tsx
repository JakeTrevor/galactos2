import type { TRPCClientErrorLike } from "@trpc/client";
import type { AnyProcedure, AnyRouter } from "@trpc/server";
import type { FC } from "react";

interface props {
  status: "error" | "loading";
  error: TRPCClientErrorLike<AnyRouter | AnyProcedure> | null;
}

const StatusHandler: FC<props> = ({ status, error }) => {
  switch (status) {
    case "loading":
      return (
        <div className="-mb-32 -mt-16 flex h-[80vh] items-center justify-center">
          <div className="loading btn-lg btn scale-[2] bg-transparent text-2xl font-bold lowercase text-red-600 " />
        </div>
      );
    case "error":
      return (
        <div className="flex h-[80vh] items-center justify-center">
          <p className="text-4xl font-bold text-red-600">{error!.message}</p>
        </div>
      );
  }
};

export default StatusHandler;
