import Runtime "mo:core/Runtime";
import Types "../types/users";

module {
  public func calculateBuyerFee(tier : Types.BuyerTier, amount : Float) : Float {
    Runtime.trap("not implemented");
  };

  public func calculateSupplierFee(size : Types.SupplierSize, salesVolume : Float) : Float {
    Runtime.trap("not implemented");
  };

  public func calculateMultiRoleFee(
    buyerTier : Types.BuyerTier,
    supplierSize : Types.SupplierSize,
    buyerAmount : Float,
    supplierSales : Float,
  ) : Float {
    Runtime.trap("not implemented");
  };
};
