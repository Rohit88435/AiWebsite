import dotenv from "dotenv";

dotenv.config();

import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIP_SCRETE_KEY);

export default stripe;
