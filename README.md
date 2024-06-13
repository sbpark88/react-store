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

# MobX

- observable, computed, action 등 Vue 2 의 Class 컴포넌트를 구성하는 느낌의 스토어 구현.
- 스토어 구현 및 사용이 쉬움.
- ContextAPI 결합한 적용.

# Recoil

- `atom`은 단순하게 하나의 변수 상태만을 저장한다. 클래스의 단일 property 만 정의하는 행위라 보면 된다.
- `selector`는 `atom` 또는 다른 `selector`의 `getter` 또는 `setter`를 정의한다. `getter`는
  반드시 정의해야하지만 `setter`는 Optional 이다. 단, Recoil 을 `selector`가 `setter`를 정의해
  직접 mutation 하는 것을 권장하지 않는다. 컴포넌트에서 수정한 값을 통째로 `useRecoilState`의
  `setter`를 통해 불변성을 유지한 채 교체하는 것을 권장한다.

- Recoil 의 `selector`가 비동기 작업을 할 경우, `react-error-boundary`를 사용할 수 없다.
  `react-error-boundary` 컴포넌트는 비동기 에러를 잡지 못하기 때문이다. 이를 해결하기 위해서는
  `useErrorBoundary`를 사용해 HOC 로 감싸줘야하는 데, 이것을 사용하려면 비동기 로직 자체가 `selector`가
  아닌 컴포넌트의 `useEffect`에 있어야하며, 이는 재사용성이 좋지 못하므로 좋은 방법이 아니다.
- 이를 해결하는 방법으로는 Recoil 의 `Loadable` 클래스를 사용하는 것이다. 이것은  `Promise`와 같이
  비동기 처리를 위해 wrapping 하는 객체이며, Recoil 은 이 `Loadable` 클래스를 사용해 `Promise`를
  다루는 것 뿐 아니라, `Suspense`, `ErrorBoundary`를 대신할 수 있다.
- 즉, Recoil 을 사용할 때는 `Suspense`, `ErrorBoundary` 대신 `Lodable`을 사용하면 되며,
  `useRecoilValue` 대신 `useRecoilValueLoadable` 훅을 사용하면 된다.
