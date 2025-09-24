"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../shadcn/dialog";
import FormGerbang from "./FormGerbang";
import { Pen } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateGerbang } from "@/services/masterGerbang";
import { toast } from "sonner";

interface IProps {
  data: any;
}
export default function EditMasterGerbang({ data }: IProps) {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const update = useMutation({
    mutationFn: updateGerbang,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["gerbang"] });
      toast.error("Data berhasil diupdate.", {
        duration: 3000,
        position: "top-center",
        style: { backgroundColor: "#16a34a", color: "white" },
      });
      setOpen(false);
    },
    onError: () => {
      toast.error("Login gagal.", {
        duration: 3000,
        position: "top-center",
        style: { backgroundColor: "#f96161", color: "white" },
      });
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger asChild>
          <div className="cursor-pointer">
            <Pen width={19} height={20} />
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Edit Gerbang</DialogTitle>
          </DialogHeader>
          <FormGerbang data={data} onClick={(dt) => update.mutate(dt)} />
        </DialogContent>
      </form>
    </Dialog>
  );
}
