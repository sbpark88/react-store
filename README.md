# react-store
Context, Redux, MobX, Recoil, Zustand 사용법에 대해 각 브랜치에 정리

# Context

- useContext 의 기능을 확장하기 위해 useReducer 를 적용해 Provider 컴포넌트를 생성.
- Suspense 컴포넌트를 적용한 스피너 처리.

# Redux

- Redux-toolkit 을 사용하지 않은 Redux 사용 예제.
- React-redux, Redux-devtools, Redux-thunk 설치
- Redux 의 combineReducers, middleware 사용.

# Redux-toolkit

- Axios 없이 Redux-toolkit 만으로 Store 및 API fetch 사용 예제.
- 'buildCreateSlice'를 사용해 'createAppSlice'를 구현해 사용.
- Axios 대신 Redux-toolkit 의 'createApi'를 사용해 구현하고, configureStore 에 middleware 등록.
