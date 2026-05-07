"use client";

type PayButtonProps = {
  level: "beginner" | "intermediate" | "expert";
  amount: number;
  email: string;
};

export default function PayButton({ level, amount, email }: PayButtonProps) {
  const verifyPayment = async (reference: string, level: string) => {
    try {
      //  call verify api
      const res = await fetch("/api/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reference,
          level,
        }),
      });

      // Read API response
      const data = await res.json();

      // handle result
      if (data.success) {
        // redirect user
        window.location.href = `/course/${data.level}`;
      } else {
        alert("Payment verification failed");
      }
    } catch (err) {
      alert("Network error");
    }
  };

  // payment function
  const handlePayment = () => {
    // safety check
    if (!(window as any).PaystackPop) {
      alert("Paystack not loaded yet. Try again.");
      return;
    }
    // Access Paystack global
    const handler = (window as any).PaystackPop.setup({
      // connect to Paystack account.
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,

      // Add REQUIRED fields
      email,
      amount: amount * 100, // Paystack uses kobo, not naira.
      ref: "" + Math.floor(Math.random() * 1000000000),

      // Handle success
      callback: function (response: any) {
        console.log("Success:", response);

        //  trigger next step
        verifyPayment(response.reference, level);
      },

      // Handle cancel
      onClose: function () {
        console.log("Payment closed");
      },
    });
    // open popup
    handler.openIframe();
  };

  return (
    <button
      // onClick={() => {
      //   console.log("clicked");
      //   handlePayment();
      // }}
      onClick={handlePayment}
    >
      Pay Now
    </button>
  );
}
