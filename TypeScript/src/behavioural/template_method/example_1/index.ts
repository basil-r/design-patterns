import { Coffee } from "./Coffee";
import { Tea } from "./Tea";

(async () => {
  const coffee = new Coffee();
  const tea = new Tea();

  console.log("\nMaking tea...\n");
  await tea.prepareRecipe();

  console.log("\nMakong coffee...\n");
  await coffee.prepareRecipe();
})();
