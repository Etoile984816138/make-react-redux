import React, { Component } from 'react';
import PropTypes from 'prop-types';

const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
    class Connect extends Component {
        static contextTypes = {
            store: PropTypes.object
        }

        constructor() {
            super();
            this.state = {
                allProps: {}
            }
        }

        componentWillMount() {
            const { store } = this.context;
            this._updateProps();
            store.subscribe(() => this._updateProps());
        }

        _updateProps() {
            const { store } = this.context;
            let stateProps = mapStateToProps
                ? mapStateToProps(store.getState(), this.props)
                : {}; // 额外传入 props，让获取数据更加灵活方便
            let dispatchProps = mapDispatchToProps
                ? mapDispatchToProps(store.dispatch, this.props)
                : {};
            this.setState({
                allProps: { // 整合普通的 props 和从 state 生成的 props
                    ...stateProps,
                    ...dispatchProps,
                    ...this.props
                }
            })
        }

        render() {
            const { store } = this.context;
            const allProps = this.state.allProps;
            // {...stateProps} 意思是把这个对象里面的属性全部通过 `props` 方式传递进去
            return <WrappedComponent {...allProps} />
        }
    }

    return Connect
}

export default connect;