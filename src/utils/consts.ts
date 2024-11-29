import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();
export const notificationErrors = {
  file: {
    title: "Ошибка при загрузке файла.",
    message: "Что-то пошло не так, попробуйте позже.",
  },
  create: {
    title: "Ошибка при создании записи.",
    message: "Что-то пошло не так, попробуйте позже.",
  },
  update: {
    title: "Ошибка при обновлении записи.",
    message: "Что-то пошло не так, попробуйте позже.",
  },
  delete: {
    title: "Ошибка при удалении записи.",
    message: "Что-то пошло не так, попробуйте позже.",
  },
  get: {
    title: "Ошибка загрузки.",
    message: "Произошла ошибка при загрузке записей.",
  },
  login: {
    title: "Вход.",
    message: "Oшибка входа.",
  },
};

export const notificationSuccess = {
  file: {
    title: "Загружено.",
    message: "Файл загружен успешно.",
  },
  create: {
    title: "Создано.",
    message: "Запись создана успешно.",
  },
  update: {
    title: "Обновлено.",
    message: "Запись обновлена успешно.",
  },
  delete: {
    title: "Удалено.",
    message: "Запись удалена успешно.",
  },
  login: {
    title: "Вход",
    message: "Вы успешно авторизовались.",
  },
};