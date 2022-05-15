import React from 'react';

export default class Input extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.meta.active && this.props.meta.active) {
            this.input.focus();
        }
    }

    render() {
        let error;
        if (this.props.meta.touched && this.props.meta.error) {
            error = <div className="form-error">{this.props.meta.error}</div>;
        }

        let warning;
        if (this.props.meta.touched && this.props.meta.warning) {
            warning = (
                <div className="form-warning">{this.props.meta.warning}</div>
            );
        }

        return (
            <div>
                <label htmlFor={this.props.id}>
                    {this.props.label}
                    {error}
                    {warning}
                </label>
                <input
                    placeholder={this.props.placeholder}
                    {...this.props.input}
                    id={this.props.id}
                    type={this.props.type}
                    ref={input => (this.input = input)}
                />
                {warning}
            </div>
        );
    }
}
