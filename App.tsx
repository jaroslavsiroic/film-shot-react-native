import React, { Suspense } from "react";
import { Provider } from "jotai";
import { LoadingScreen } from "./src/containers/LoadingScreen";
import StackNavigation from "./src/stackNavigation";

const App = () => {
    return (
        <Provider>
            <Suspense fallback={<LoadingScreen />}>
                <StackNavigation />
            </Suspense>
        </Provider>
    );
};

export default App;
