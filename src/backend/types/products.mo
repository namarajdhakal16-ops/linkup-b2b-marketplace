import Common "common";

module {
  public type UserId = Common.UserId;

  public type ProductStatus = {
    #active;
    #inactive;
  };

  public type Product = {
    id : Nat;
    name : Text;
    category : Text;
    price : Float;
    stock : Nat;
    description : Text;
    supplierId : UserId;
    imageUrl : ?Text;
    specifications : Text;
    certifications : Text;
    status : ProductStatus;
    createdAt : Common.Timestamp;
  };
};
