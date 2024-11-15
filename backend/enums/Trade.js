const TradeOperationType = {
  LONG: "long",
  SHORT: "short",
};

const TradeEntryTrigger = {
  LIMIT: "limit",
  CANDLE_CLOSE: "candle_close",
  MARKET: "market",
};

const TradeStatus = {
  PENDING: "pending",
  ACTIVE: "active",
  BREAKEVEN_OPEN: "breakeven_open",
  BREAKEVEN_CLOSE: "breakeven_close",
  STOPLOSS: "stoploss",
  PARCIAL: "parcial",
  CLOSED: "closed",
};

const TradeTimeframeTrigger = {
  M1: "m1",
  M5: "m5",
  M15: "m15",
  M30: "m30",
  H1: "h1",
  H4: "h4",
  D1: "d1",
  W1: "w1",
};

const TradeCollectionName = "Trade";

module.exports = {
  TradeOperationType,
  TradeEntryTrigger,
  TradeStatus,
  TradeTimeframeTrigger,
  TradeCollectionName,
};
