import { Order, Trade } from '../types/trading';

class OrderBookService {
  private buyOrders: Order[] = [];
  private sellOrders: Order[] = [];
  private trades: Trade[] = [];

  addOrder(order: Order): void {
    if (order.type === 'buy') {
      this.buyOrders.push(order);
      this.buyOrders.sort((a, b) => b.price - a.price || a.timestamp - b.timestamp);
    } else {
      this.sellOrders.push(order);
      this.sellOrders.sort((a, b) => a.price - b.price || a.timestamp - b.timestamp);
    }
    this.matchOrders();
  }

  private matchOrders(): void {
    while (this.buyOrders.length > 0 && this.sellOrders.length > 0) {
      const bestBuy = this.buyOrders[0];
      const bestSell = this.sellOrders[0];

      if (bestBuy.price >= bestSell.price) {
        const matchAmount = Math.min(bestBuy.remainingAmount, bestSell.remainingAmount);
        const price = bestSell.price;

        const trade: Trade = {
          id: `trade-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          buyOrderId: bestBuy.id,
          sellOrderId: bestSell.id,
          price,
          amount: matchAmount,
          timestamp: Date.now(),
        };

        this.trades.push(trade);

        bestBuy.remainingAmount -= matchAmount;
        bestSell.remainingAmount -= matchAmount;

        if (bestBuy.remainingAmount === 0) {
          bestBuy.status = 'filled';
          this.buyOrders.shift();
        } else {
          bestBuy.status = 'partially_filled';
        }

        if (bestSell.remainingAmount === 0) {
          bestSell.status = 'filled';
          this.sellOrders.shift();
        } else {
          bestSell.status = 'partially_filled';
        }
      } else {
        break;
      }
    }
  }

  getOrderBook() {
    return {
      buyOrders: this.buyOrders,
      sellOrders: this.sellOrders,
      trades: this.trades,
    };
  }
}

export const orderBookService = new OrderBookService();