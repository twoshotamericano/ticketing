import mongoose from 'mongoose';
import { OrderDoc } from './orders';

//interface for OrderAttrs
interface PaymentAttrs {
  chargeId: string;
  orderId: string;
}

//interface for OrderDoc
interface PaymentDoc extends mongoose.Document {
  chargeId: string;
  orderId: string;
}

interface PaymentModel extends mongoose.Model<PaymentDoc> {
  build(attrs: PaymentAttrs): PaymentDoc;
}

const paymentSchema = new mongoose.Schema(
  {
    chargeId: {
      type: String,
      required: true,
    },
    orderId: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

paymentSchema.statics.build = (attr: PaymentAttrs) => {
  return new Payment(attr);
};

const Payment = mongoose.model<PaymentDoc, PaymentModel>(
  'Payment',
  paymentSchema
);

paymentSchema.set('versionKey', 'version');

export { Payment, PaymentDoc };
