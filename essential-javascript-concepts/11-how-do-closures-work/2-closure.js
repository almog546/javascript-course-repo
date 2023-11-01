function secretAssertSecret() {
  const secret = "foobar";

  return (arg) => {
    if (arg !== secret) {
      throw new Error("wrong secret");
    }
  };
}

const assertSecret = secretAssertSecret();
assertSecret("foobar");
