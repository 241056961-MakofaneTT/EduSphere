import React, { useState } from 'react';
import { FaEye, FaTrash, FaEdit } from 'react-icons/fa';
import styles from '../styles/services.module.css';

const Services = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      title: 'Navigation',
      description: 'New improved maps added to make traveling through campus easier for students with disabilities',
      image: 'https://th.bing.com/th/id/OIP.ZUExD74to5w3ngfSEuBxJwHaGD?w=220&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
    {
      id: 2,
      title: 'Implimentation Of Ramps',
      description: 'Added more ramps next to stairs to increase accessibility on campus.',
      image: 'https://www.bing.com/th?id=OIP.Fk80ITYbH9SESlKVBjeFNAHaHa&w=150&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    },
  ]);

  const [modalData, setModalData] = useState({}); // Data for modals
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility
  const [modalType, setModalType] = useState(''); // Modal type: 'create', 'edit', 'view', or 'delete'

  const openModal = (type, service = null) => {
    setModalType(type);
    setModalData(service || {});
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType('');
    setModalData({});
  };

  const handleCreate = () => {
    const newService = {
      id: Date.now(),
      title: modalData.title,
      description: modalData.description,
      image: modalData.image || 'https://via.placeholder.com/150',
    };
    setServices([...services, newService]);
    closeModal();
  };

  const handleEdit = () => {
    setServices(
      services.map((service) =>
        service.id === modalData.id ? modalData : service
      )
    );
    closeModal();
  };

  const handleDelete = (id) => {
    setServices(services.filter((service) => service.id !== id));
    closeModal();
  };

  return (
    <div className={styles.servicesContainer}>
      <div className={styles.header}>
        <h2>Our Services</h2>
        <button
          className={styles.createButton}
          onClick={() => openModal('create')}
        >
          Create
        </button>
      </div>
      <div className={styles.cardContainer}>
        {services.map((service) => (
          <div key={service.id} className={styles.card}>
            <img src={service.image} alt={service.title} className={styles.cardImage} />
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDescription}>{service.description}</p>
            <div className={styles.cardActions}>
              <FaEye
                onClick={() => openModal('view', service)}
                className={styles.actionIcon}
              />
              <FaEdit
                onClick={() => openModal('edit', service)}
                className={styles.actionIcon}
              />
              <FaTrash
                onClick={() => openModal('delete', service)}
                className={styles.actionIcon}
              />
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            {modalType === 'create' && (
              <>
                <h2>Create Service</h2>
                <input
                  type="text"
                  placeholder="Title"
                  value={modalData.title || ''}
                  onChange={(e) =>
                    setModalData({ ...modalData, title: e.target.value })
                  }
                />
                <textarea
                  placeholder="Description"
                  value={modalData.description || ''}
                  onChange={(e) =>
                    setModalData({ ...modalData, description: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Image URL"
                  value={modalData.image || ''}
                  onChange={(e) =>
                    setModalData({ ...modalData, image: e.target.value })
                  }
                />
                <button onClick={handleCreate}>Create</button>
              </>
            )}

            {modalType === 'edit' && (
              <>
                <h2>Edit Service</h2>
                <input
                  type="text"
                  placeholder="Title"
                  value={modalData.title || ''}
                  onChange={(e) =>
                    setModalData({ ...modalData, title: e.target.value })
                  }
                />
                <textarea
                  placeholder="Description"
                  value={modalData.description || ''}
                  onChange={(e) =>
                    setModalData({ ...modalData, description: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Image URL"
                  value={modalData.image || ''}
                  onChange={(e) =>
                    setModalData({ ...modalData, image: e.target.value })
                  }
                />
                <button onClick={handleEdit}>Save Changes</button>
              </>
            )}

            {modalType === 'view' && (
              <>
                <h2>View Service</h2>
                <p>
                  <strong>Title:</strong> {modalData.title}
                </p>
                <p>
                  <strong>Description:</strong> {modalData.description}
                </p>
                <img
                  src={modalData.image}
                  alt={modalData.title}
                  className={styles.cardImage}
                />
              </>
            )}

            {modalType === 'delete' && (
              <>
                <h2>Delete Service</h2>
                <p>Are you sure you want to delete {modalData.title}?</p>
                <button
                  onClick={() => handleDelete(modalData.id)}
                  className={styles.deleteButton}
                >
                  Delete
                </button>
              </>
            )}

            <button onClick={closeModal} className={styles.closeButton}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
