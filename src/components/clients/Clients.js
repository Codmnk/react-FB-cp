import React, { Component } from "react";
import { Link } from "react-router-dom";

class Clients extends Component {
  render() {
    const clients = [
      {
        id: "565656",
        firstName: "kevin",
        lastName: "johnson",
        email: "sjfls@lsjf.com",
        phone: "1564453",
        balance: "30"
      },
      {
        id: "5464",
        firstName: "vee",
        lastName: "josfsfhnson",
        email: "sjfls@lsjf.com",
        phone: "1564453",
        balance: "65.23"
      },
      {
        id: "33",
        firstName: "bgrg",
        lastName: "ssdf",
        email: "f@lsjf.com",
        phone: "34",
        balance: "55.6"
      }
    ];

    if (clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                <i className="fas fa-users">Clients</i>
              </h2>
            </div>
            <div className="col-md-6" />
            <table className="table table-striped">
              <thead className="thead-inverse">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                {clients.map(client => (
                  <tr key={client.id}>
                    <td>
                      {client.firstName}
                      {client.lastName}
                    </td>
                    <td>{client.email}</td>
                    <td>${parseFloat(client.balance).toFixed(2)}</td>
                    <td>
                      <Link
                        to={`/client/${client.id}`}
                        className="btn btn-secondary btn-sm"
                      >
                        <i className="fas fa-arrow-circle-right" /> Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    } else {
      return <h1>loading ..</h1>;
    }
  }
}

export default Clients;
