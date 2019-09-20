import {Component, HostListener, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'ons-page',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {


  // disablePaymentButton: boolean = true;

  constructor() {
  }

  ngOnInit() {
    this.loadStripe();
  }

  pay(amount) {

    const handler = (window as any).StripeCheckout.configure({
      key: 'pk_test_8FsSEQYHkqVZ0TA93UvX59pL00Be9qct5C',
      locale: 'auto',
      token(token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token);
        alert('Token Created!!');
      }
    });

    handler.open({
      name: 'Fulei Restaurant',
      description: '2 widgets',
      image: '',
      amount: amount * 100,
      currency: 'EUR',
    });

  }

  loadStripe() {

    if (!window.document.getElementById('stripe-script')) {
      const s = window.document.createElement('script');
      s.id = 'stripe-script';
      s.type = 'text/javascript';
      s.src = 'https://checkout.stripe.com/checkout.js';
      window.document.body.appendChild(s);
    }
  }

  /*confirmPayment() {
    const paymentPayload = {
      email: this.payuform.email,
      name: this.payuform.firstname,
      phone: this.payuform.phone,
      productInfo: this.payuform.productinfo,
      amount: this.payuform.amount
    };
    return this.http.post<any>('http://localhost:8080/payment/payment-details', paymentPayload).subscribe(
      data => {
        console.log(data);
        this.payuform.txnid = data.txnId;
        this.payuform.surl = data.sUrl;
        this.payuform.furl = data.fUrl;
        this.payuform.key = data.key;
        this.payuform.hash = data.hash;
        this.payuform.txnid = data.txnId;
        this.disablePaymentButton = false;
      }, error1 => {
        console.log(error1);
      });
  }*/
}
