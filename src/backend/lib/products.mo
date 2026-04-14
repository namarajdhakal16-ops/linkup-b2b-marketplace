import Map "mo:core/Map";
import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import Types "../types/products";
import Common "../types/common";

module {
  public type State = {
    products : List.List<Types.Product>;
    var nextId : Nat;
  };

  public func addProduct(
    state : State,
    caller : Principal,
    name : Text,
    category : Text,
    price : Float,
    stock : Nat,
    description : Text,
    imageUrl : ?Text,
    specifications : Text,
    certifications : Text,
    now : Common.Timestamp,
  ) : Common.Result<Nat, Text> {
    Runtime.trap("not implemented");
  };

  public func getProducts(state : State) : [Types.Product] {
    Runtime.trap("not implemented");
  };

  public func getProductsBySupplier(
    state : State,
    supplierId : Principal,
  ) : [Types.Product] {
    Runtime.trap("not implemented");
  };

  public func updateProduct(
    state : State,
    caller : Principal,
    id : Nat,
    price : Float,
    stock : Nat,
    status : Text,
  ) : Common.Result<(), Text> {
    Runtime.trap("not implemented");
  };

  public func deleteProduct(
    state : State,
    caller : Principal,
    id : Nat,
  ) : Common.Result<(), Text> {
    Runtime.trap("not implemented");
  };
};
