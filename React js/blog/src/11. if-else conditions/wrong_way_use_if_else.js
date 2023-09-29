import { useState } from "react";
export default function Data() {
    let data = 6
    if (data === 6) {
        return (
            <div>
                <h1>this is the  6 data</h1>   {/* avada return lihaycha garja nahi */}
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>this is the  not!!!!!! data</h1> {/* avada return lihaycha garja nahi */}
            </div>
        )
    }

}