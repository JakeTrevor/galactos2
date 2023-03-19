import { TRPCClientErrorLike } from "@trpc/client";
import { FC } from "react";

interface props {
  status: "error" | "loading";
  error: TRPCClientErrorLike<any> | null;
}

const StatusHandler: FC<props> = ({ status, error }) => {
  switch (status) {
    case "loading":
      return (
        <div className="-mb-32 -mt-16 flex h-[80vh] items-center justify-center">
          <div className="loading btn-lg btn scale-[2] text-2xl font-bold lowercase text-red-600 " />
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
