import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  // 에러가 발생하면 componentDidCatch 메서드 호출
  // this.state.error 값을 true로 업데이트
  componentDidCatch(error, info) {
    this.setState({
      error: true,
    });
    console.log({ error, info });
  }

  // render 함수
  // this.state.error 값이 true라면
  // 에러가 발생했음을 알려 주는 문구를 보여줌.
  render() {
    if (this.state.error) return <div>에러가 발생했습니다!</div>;
    return this.props.children;
  }
}
