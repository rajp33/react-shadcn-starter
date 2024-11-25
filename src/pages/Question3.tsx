import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from '@/hooks/use-toast';

const Question3: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {toast} = useToast();


  const onPaymentClick = () => {
    setIsLoading(true);
    toast({
      title: 'Pending Payment',
      description: 'Please wait while we process your payment',
      duration: 3000,
    });
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: 'Payment Successful',
        className: 'bg-green-500 text-white',
        description: 'Your payment has been processed successfully',
        duration: 3000,
      });
      setOpen(false);
    }, 3000);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'c') {
        onPaymentClick();
      } else if (event.key === 'p') {
        setOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <Button>Payment (press 'p')</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Modal</DialogTitle>
          </DialogHeader>
          <Button onClick={onPaymentClick}>Credit Card (press 'c')</Button>
          <Button onClick={onPaymentClick}>Cash</Button>
          <Button onClick={onPaymentClick}>Other</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Question3;
