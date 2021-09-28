import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <h3>Login</h3>
                <hr />
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <form method="POST">
                            <div class="form-group">
                                <input type="text" class="form-control" name="email" placeholder="Email" />
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" name="password" placeholder="Password" />
                            </div>
                            <div class="form-group">
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" name="remember_me" value="checked" />
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                            <button class="btn btn-success btn-block">Login</button>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
