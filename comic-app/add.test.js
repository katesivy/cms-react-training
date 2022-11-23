import React from "react";
import Count from './add';

test('<Count />', () => {
    const { debug } = render(<Count />)

    debug();
})