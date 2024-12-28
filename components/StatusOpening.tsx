"use client";

import { isOpenNow } from "@/helpers/is-open-now";
import { useEffect, useState } from "react";
import { schedule } from "@/constants/schedule";

const StatusOpening = () => {
  const [status, setStatus] = useState<false | string>(false);

  useEffect(() => {
    const result = isOpenNow(schedule); // Retorna horário de fechamento ou false
    setStatus(result);
  }, []);

  return (
    <div className="flex items-center justify-center">
      {status ? (
        <p className="text-gray-400 text-sm mt-1">{`Aberto até às ${status}`}</p>
      ) : (
        <p className="text-gray-400 text-sm mt-1">Estamos fechados.</p>
      )}
    </div>
  );
};

export default StatusOpening;