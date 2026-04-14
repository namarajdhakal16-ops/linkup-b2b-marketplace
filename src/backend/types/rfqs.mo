import Common "common";

module {
  public type UserId = Common.UserId;

  public type RFQStatus = {
    #pending;
    #quoted;
    #accepted;
    #rejected;
  };

  public type RFQ = {
    id : Nat;
    buyerId : UserId;
    supplierId : UserId;
    productId : Nat;
    quantity : Nat;
    requiredDate : Text;
    specialRequirements : Text;
    status : RFQStatus;
    quoteAmount : ?Float;
    createdAt : Common.Timestamp;
  };
};
