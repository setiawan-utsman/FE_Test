"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../shadcn/dialog";
import { Button } from "../shadcn/button";
import FormGerbang from "./FormGerbang";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createGerbang } from "@/services/masterGerbang";
import { toast } from "sonner";
export default function AddMasterGerbang() {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const create = useMutation({
    mutationFn: createGerbang,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["gerbang"] });
      toast.error("Data berhasil ditambahkan.", {
        duration: 3000,
        position: "top-center",
        style: { backgroundColor: "#16a34a", color: "white" },
      });
      setOpen(false);
    },
    onError: () => {
      toast.error("Data gagal ditambahkan.");
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger asChild>
          <Button onClick={() => setOpen(true)}>Tambah</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Tambah Gerbang</DialogTitle>
          </DialogHeader>
          <FormGerbang onClick={(dt) => create.mutate(dt)} />
        </DialogContent>
      </form>
    </Dialog>
  );
}
