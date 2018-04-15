package in.energiasolutions.iot.iot;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DeviceLogRepository extends JpaRepository<DeviceLog,String>{

    Page<DeviceLog> findByMonitor(Monitor monitor, Pageable pageable);
    Page<DeviceLog> findByKeyAndMonitor(String key,Monitor monitor, Pageable pageable);

}
