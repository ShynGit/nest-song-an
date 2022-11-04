import React, { useCallback } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar, Chart, Pie } from "react-chartjs-2";
import {
  useGetCategories,
  useGetProducts,
} from "../../pages/Admin/product/api/hooks";

ChartJS.register(...registerables);

export const ProductChart = () => {
  const { data: categories, loading: loadingCategories } = useGetCategories({});
  const { data: products, loading: loadingProduct } = useGetProducts({});

  const getData = ({ categories, products }) => {
    if (!categories && !products)
      return {
        labels: [],
        datasets: [
          {
            label: "Product Each Category",
            data: [],
          },
        ],
      };

    const categoriesWithCount = categories.map((category) => ({
      ...category,
      count: 0,
    }));

    products.forEach((product) => {
      const indexIncreaseCategory = categoriesWithCount.findIndex(
        (category) => category.id === product.cateId
      );
      categoriesWithCount[indexIncreaseCategory].count += 1;
    });

    const labels = categoriesWithCount.map((item) => {
      return item.name;
    });

    const data = categoriesWithCount.map((item) => {
      return item.count;
    });

    return {
      labels: labels,
      datasets: [
        {
          label: "Product Each Category",
          data,
          backgroundColor: [
            "rgba(255, 99, 132, 0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(255, 206, 86, 0.8)",
            "rgba(75, 192, 192, 0.8)",
            "rgba(153, 102, 255, 0.8)",
            "rgba(255, 159, 64, 0.8)",
            "rgba(255, 159, 64, 0.8)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "24px",
        width: "100%",
      }}
    >
      <Bar
        style={{ maxWidth: "400px", maxHeight: "400px" }}
        type="line"
        data={getData({ categories, products })}
      />
    </div>
  );
};
