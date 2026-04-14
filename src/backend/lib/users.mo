import Map "mo:core/Map";
import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import Types "../types/users";
import Common "../types/common";

module {
  public type State = {
    users : Map.Map<Principal, Types.UserProfile>;
    var nextId : Nat;
  };

  public func registerUser(
    state : State,
    caller : Principal,
    name : Text,
    email : Text,
    role : Types.UserRole,
    buyerTier : ?Types.BuyerTier,
    supplierSize : ?Types.SupplierSize,
    now : Common.Timestamp,
  ) : Common.Result<Types.UserProfile, Text> {
    Runtime.trap("not implemented");
  };

  public func getProfile(
    state : State,
    caller : Principal,
  ) : ?Types.UserProfile {
    Runtime.trap("not implemented");
  };

  public func updateUserRole(
    state : State,
    userId : Principal,
    role : Types.UserRole,
  ) : Common.Result<(), Text> {
    Runtime.trap("not implemented");
  };

  public func verifyUser(
    state : State,
    userId : Principal,
  ) : Common.Result<(), Text> {
    Runtime.trap("not implemented");
  };

  public func getAllUsers(state : State) : [Types.UserProfile] {
    Runtime.trap("not implemented");
  };
};
