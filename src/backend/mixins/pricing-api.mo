import Runtime "mo:core/Runtime";
import PricingLib "../lib/pricing";
import UserTypes "../types/users";

mixin () {
  public query func calculateBuyerFee(
    tier : UserTypes.BuyerTier,
    amount : Float,
  ) : async Float {
    Runtime.trap("not implemented");
  };

  public query func calculateSupplierFee(
    size : UserTypes.SupplierSize,
    salesVolume : Float,
  ) : async Float {
    Runtime.trap("not implemented");
  };

  public query func calculateMultiRoleFee(
    buyerTier : UserTypes.BuyerTier,
    supplierSize : UserTypes.SupplierSize,
    buyerAmount : Float,
    supplierSales : Float,
  ) : async Float {
    Runtime.trap("not implemented");
  };
};
