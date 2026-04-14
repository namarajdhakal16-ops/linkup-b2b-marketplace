import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import RFQsLib "../lib/rfqs";
import RFQTypes "../types/rfqs";
import Common "../types/common";

mixin (
  rfqsState : RFQsLib.State,
) {
  public shared ({ caller }) func submitRFQ(
    supplierId : Principal,
    productId : Nat,
    quantity : Nat,
    requiredDate : Text,
    specialRequirements : Text,
  ) : async Common.Result<Nat, Text> {
    Runtime.trap("not implemented");
  };

  public query ({ caller }) func getMyRFQs() : async [RFQTypes.RFQ] {
    Runtime.trap("not implemented");
  };

  public query ({ caller }) func getIncomingRFQs() : async [RFQTypes.RFQ] {
    Runtime.trap("not implemented");
  };

  public query ({ caller }) func getAllRFQs() : async [RFQTypes.RFQ] {
    Runtime.trap("not implemented");
  };

  public shared ({ caller }) func respondToRFQ(
    rfqId : Nat,
    quoteAmount : Float,
  ) : async Common.Result<(), Text> {
    Runtime.trap("not implemented");
  };

  public shared ({ caller }) func updateRFQStatus(
    rfqId : Nat,
    status : Text,
  ) : async Common.Result<(), Text> {
    Runtime.trap("not implemented");
  };
};
