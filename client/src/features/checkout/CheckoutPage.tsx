import { useEffect, useMemo, useRef } from "react";
import { Grid, Typography } from "@mui/material";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, type StripeElementsOptions } from "@stripe/stripe-js";

import OrderSummary from "../../app/shared/components/OrderSummary";
import CheckoutStepper from "./CheckoutStepper";

import { useFetchBasketQuery } from "../basket/basketApi";
import { useCreatePaymentIntentMutation } from "./checkoutApi";
import { useAppSelector } from "../../app/store/store";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

export default function CheckoutPage() {
  const { data: basket } = useFetchBasketQuery();
  const [createPaymentIntent, { isLoading }] =
    useCreatePaymentIntentMutation();

  const { darkMode } = useAppSelector((state) => state.ui);

  const created = useRef(false);

  useEffect(() => {
    if (created.current) return;

    created.current = true;
    createPaymentIntent();
  }, [createPaymentIntent]);

  const clientSecret = basket?.clientSecret;

  const options = useMemo<StripeElementsOptions | undefined>(() => {
    if (!clientSecret) return undefined;

    return {
      clientSecret,
      appearance: {
        labels: "floating",
        theme: darkMode ? "night" : "stripe",
      },
    };
  }, [clientSecret, darkMode]);

  return (
    <Grid container spacing={2}>
      <Grid size={8}>
        {!stripePromise || !options || isLoading ? (
          <Typography variant="h6">
            Loading checkout...
          </Typography>
        ) : (
          <Elements stripe={stripePromise} options={options}>
            <CheckoutStepper />
          </Elements>
        )}
      </Grid>

      <Grid size={4}>
        <OrderSummary />
      </Grid>
    </Grid>
  );
}