export const checkEnoughFields = (fields, data) => {
  for (const field of fields) {
    if (!data[field]) {
      const error = new Error(`[${fields.join(", ")}] is required!`);
      error.status = 401;
      throw error;
    }
  }
};

export const checkMissingField = (fields, data) => {
  const extraFields = Object.keys(data).filter((key) => !fields.includes(key));

  if (extraFields.length > 0) {
    const error = new Error(
      `Extra fields not allowed: ${extraFields.join(", ")}`
    );
    error.status = 401;
    throw error;
  }
};
