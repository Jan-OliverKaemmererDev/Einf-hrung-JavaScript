let testScopeVar = "servus world";

function scopeTest() {
    scopeTestSecond();
}

function scopeTestSecond() {
    console.log(testScopeVar);
}