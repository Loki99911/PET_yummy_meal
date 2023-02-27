export const NutrientsForm = () => {
    
    return (
      <div>
        <label htmlFor="carbsID">Carbs rate:</label>
        <input
          id="carbsID"
          type="range"
          name="carbs"
          min="10"
          max="100"
          step="1"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <label htmlFor="proteinID">Protein rate:</label>
        <input
          id="proteinID"
          type="range"
          name="protein"
          min="10"
          max="100"
          step="1"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <label htmlFor="caloriesID">Calories rate:</label>
        <input
          id="caloriesID"
          type="range"
          name="calories"
          min="50"
          max="800"
          step="1"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
};
