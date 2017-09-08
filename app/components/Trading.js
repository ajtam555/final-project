// include react
var React = require("react");

var Link = require('react-router').Link

//create saved component
var Trading = React.createClass({

    render: function () {

        return (

            <div>

                <div className="section">
                    <div className="section">
                        <div className="row">
                            <div className="col s12">
                                <ul className="tabs">
                                    <li className="tab col s3"><Link to="/Portfolio">Portfolio</Link></li>
                                    <li className="tab col s3"><Link to="/Balances">Balances</Link></li>
                                    <li className="tab col s3"><Link to="/Trading">Trading</Link></li>
                                    <li className="tab col s3"><Link to="/Login">Log Out</Link></li> 
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <form className="col s12">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">search</i>
                            <input id="icon_prefix" type="text" className="validate" />
                            <label htmlFor="icon_prefix"></label>
                        </div>
                        <div className="input-field col s6">
                            <a className="waves-effect waves-light btn">Search</a>
                        </div>
                    </form>
                </div>
                <div className="row">
                    <h5>Stock Name</h5>
                </div>
                <div className="row">
                    <div className="col s2">
                        <div className="card-panel">
                            <div className="text-center">
                                <div>Last Price</div>
                                <div>157.50</div>
                            </div>
                        </div>
                    </div>
                    <div className="col s2">
                        <div className="card-panel">
                            <div className="text-center">
                                <div>Today's Change</div>
                                <div>-0.360 (-0.23%)</div>
                            </div>
                        </div>
                    </div>
                    <div className="col s2">
                        <div className="card-panel">
                            <div className="text-center">
                                <div>Bid (Size)</div>
                                <div>157.25</div>
                            </div>
                        </div>
                    </div>
                    <div className="col s2">
                        <div className="card-panel">
                            <div className="text-center">
                                <div>Ask (Size)</div>
                                <div>157.30</div>
                            </div>
                        </div>
                    </div>
                    <div className="col s2">
                        <div className="card-panel">
                            <div className="text-center">
                                <div>Day's Range</div>
                                <div>156.72 - 159.50</div>
                            </div>
                        </div>
                    </div>
                    <div className="col s2">
                        <div className="card-panel">
                            <div className="text-center">
                                <div>Volume</div>
                                <div>27,428,069</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        <table className="bordered">
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td>Open</td>
                                    <td className="text-right">157.86</td>
                                </tr>
                                <tr>
                                    <td>Previous Close</td>
                                    <td className="text-right">157.86</td>
                                </tr>
                                <tr>
                                    <td>52 - Week Range</td>
                                    <td className="text-right">102.53 - 162.51</td>
                                </tr>
                                <tr>
                                    <td>Average Volume (10 days)</td>
                                    <td className="text-right">27,818,610</td>
                                </tr>
                                <tr>
                                    <td>P/E (Trailing 12 mo.)</td>
                                    <td className="text-right">17.90x</td>
                                </tr>
                                <tr>
                                    <td>EPS (Trailing 12 mo.)</td>
                                    <td className="text-right">8.82</td>
                                </tr>
                                <tr>
                                    <td>Next Earnings Date</td>
                                    <td className="text-right">10/23/17</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col s6">
                        <table className="bordered">
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td>Market Cap</td>
                                    <td className="text-right">815.4 B</td>
                                </tr>
                                <tr>
                                    <td>Shares Outstanding</td>
                                    <td className="text-right">5.2 B</td>
                                </tr>
                                <tr>
                                    <td>Beta</td>
                                    <td className="text-right">1.5</td>
                                </tr>
                                <tr>
                                    <td>Dividend Yield</td>
                                    <td className="text-right">1.60%</td>
                                </tr>
                                <tr>
                                    <td>Quarterly Yield</td>
                                    <td className="text-right">0.63</td>
                                </tr>
                                <tr>
                                    <td>Ex-Dividend Date</td>
                                    <td className="text-right">08/10/17</td>
                                </tr>
                                <tr>
                                    <td>Dividend Payable Date</td>
                                    <td className="text-right">08/17/17</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        );
    }
});

// export component for use in other files
module.exports = Trading;