import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import Types "../types/rfqs";
import Common "../types/common";

module {
  public type State = {
    rfqs : List.List<Types.RFQ>;
    var nextId : Nat;
  };

  public func submitRFQ(
    state : State,
    caller : Principal,
    supplierId : Principal,
    productId : Nat,
    quantity : Nat,
    requiredDate : Text,
    specialRequirements : Text,
    now : Common.Timestamp,
  ) : Common.Result<Nat, Text> {
    Runtime.trap("not implemented");
  };

  public func getRFQsByBuyer(
    state : State,
    buyerId : Principal,
  ) : [Types.RFQ] {
    Runtime.trap("not implemented");
  };

  public func getRFQsBySupplier(
    state : State,
    supplierId : Principal,
  ) : [Types.RFQ] {
    Runtime.trap("not implemented");
  };

  public func getAllRFQs(state : State) : [Types.RFQ] {
    Runtime.trap("not implemented");
  };

  public func respondToRFQ(
    state : State,
    caller : Principal,
    rfqId : Nat,
    quoteAmount : Float,
  ) : Common.Result<(), Text> {
    Runtime.trap("not implemented");
  };

  public func updateRFQStatus(
    state : State,
    caller : Principal,
    rfqId : Nat,
    status : Text,
  ) : Common.Result<(), Text> {
    Runtime.trap("not implemented");
  };
};
