import bcrypt from "bcrypt";

export const encryptPassword = async (
  plainPassword: string
): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(plainPassword, salt);
  return hashPassword;
};

export const isValidPassword = async (
  plainPassword: string,
  encryptedPassword: string
): Promise<boolean> => await bcrypt.compare(plainPassword, encryptedPassword);
