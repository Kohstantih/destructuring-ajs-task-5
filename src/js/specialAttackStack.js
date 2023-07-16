export default function specialAttackStack(object) {
  const { special } = object;
  const result = [];

  for (const item of special) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = item;
    result.push({
      id, name, icon, description,
    });
  }

  return result;
}
