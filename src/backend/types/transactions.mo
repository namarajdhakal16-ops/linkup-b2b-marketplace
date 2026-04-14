import Common "common";

module {
  public type UserId = Common.UserId;

  public type PaymentStatus = {
    #pending;
    #completed;
    #failed;
  };

  public type Transaction = {
    id : Nat;
    buyerId : UserId;
    supplierId : UserId;
    productId : Nat;
    amount : Float;
    paymentStatus : PaymentStatus;
    date : Common.Timestamp;
  };
};
