// lib/account-manage.js

import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { readData, writeData } from "./jsondatastore.js";

export async function createAccount({ email, password, realName }) {
  const data = readData();

  if (data.users.some(u => u.email === email)) {
    throw new Error("Account already exists");
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const newUser = {
    id: uuid(),
    email,
    realName,
    passwordHash,
    createdAt: Date.now()
  };

  data.users.push(newUser);
  writeData(data);

  return newUser;
}

export function deleteAccount(userId) {
  const data = readData();
  data.users = data.users.filter(u => u.id !== userId);
  writeData(data);
}
