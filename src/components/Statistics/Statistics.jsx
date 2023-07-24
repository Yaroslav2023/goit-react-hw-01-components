import cl from './statistics.module.css'

const Statistics = ({ title, stats }) => {
    return (
    <section className={cl.statistics}>
        {title && <h2 className={cl.title}>{title}</h2>}    
        <ul className={cl.lists}>
            {stats.map(({ id, label, percentage }) => {
                return <li key={id} className={cl.item}>
                    <span className="label">{label}</span>
                    <span className="percentage">{percentage}%</span>
                        </li>
                        })}
        </ul>
    </section>
  );
};

export default Statistics;