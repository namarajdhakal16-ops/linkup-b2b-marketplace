import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import ProductsLib "../lib/products";
import ProductTypes "../types/products";
import Common "../types/common";

mixin (
  productsState : ProductsLib.State,
) {
  public shared ({ caller }) func addProduct(
    name : Text,
    category : Text,
    price : Float,
    stock : Nat,
    description : Text,
    imageUrl : ?Text,
    specifications : Text,
    certifications : Text,
  ) : async Common.Result<Nat, Text> {
    Runtime.trap("not implemented");
  };

  public query func getProducts() : async [ProductTypes.Product] {
    Runtime.trap("not implemented");
  };

  public query ({ caller }) func getMyProducts() : async [ProductTypes.Product] {
    Runtime.trap("not implemented");
  };

  public shared ({ caller }) func updateProduct(
    id : Nat,
    price : Float,
    stock : Nat,
    status : Text,
  ) : async Common.Result<(), Text> {
    Runtime.trap("not implemented");
  };

  public shared ({ caller }) func deleteProduct(id : Nat) : async Common.Result<(), Text> {
    Runtime.trap("not implemented");
  };
};
