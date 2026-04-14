import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import UsersLib "../lib/users";
import UserTypes "../types/users";
import Common "../types/common";

mixin (
  usersState : UsersLib.State,
) {
  public shared ({ caller }) func registerUser(
    name : Text,
    email : Text,
    role : UserTypes.UserRole,
    buyerTier : ?UserTypes.BuyerTier,
    supplierSize : ?UserTypes.SupplierSize,
  ) : async Common.Result<UserTypes.UserProfile, Text> {
    Runtime.trap("not implemented");
  };

  public query ({ caller }) func getMyProfile() : async ?UserTypes.UserProfile {
    Runtime.trap("not implemented");
  };

  public shared ({ caller }) func updateUserRole(
    userId : Principal,
    role : UserTypes.UserRole,
  ) : async Common.Result<(), Text> {
    Runtime.trap("not implemented");
  };

  public shared ({ caller }) func verifyUser(
    userId : Principal,
  ) : async Common.Result<(), Text> {
    Runtime.trap("not implemented");
  };

  public query ({ caller }) func getAllUsers() : async [UserTypes.UserProfile] {
    Runtime.trap("not implemented");
  };
};
