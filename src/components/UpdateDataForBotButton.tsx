import { UpdateBotData } from "@/api/data";
import { Button } from "@mantine/core";
import { useMutation } from "@tanstack/react-query";

export const UpdateDataForBotButton = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: ["bot"],
    mutationFn: UpdateBotData,
  });
  return (
    <Button
      onClick={() => mutate()}
      loaderProps={{
        color: "slate.9",
      }}
      loading={isPending}
      disabled={isPending}
      variant="outline"
    >
      Обновить данные для бота
    </Button>
  );
};
