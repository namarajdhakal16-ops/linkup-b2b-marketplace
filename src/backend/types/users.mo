import Common "common";

module {
  public type UserId = Common.UserId;

  public type UserRole = {
    #buyer;
    #supplier;
    #both;
    #admin;
  };

  public type BuyerTier = {
    #tier1;
    #tier2;
    #tier3;
    #tier4;
  };

  public type SupplierSize = {
    #small;
    #medium;
    #large;
  };

  public type UserProfile = {
    id : UserId;
    name : Text;
    email : Text;
    role : UserRole;
    buyerTier : ?BuyerTier;
    supplierSize : ?SupplierSize;
    verified : Bool;
    createdAt : Common.Timestamp;
  };
};
